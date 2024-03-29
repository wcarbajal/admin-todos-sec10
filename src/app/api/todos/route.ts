import prisma from '@/lib/prisma'
import { Todo } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server'
import * as yup from 'yup';


export async function GET(request: Request) {

    const { searchParams } = new URL(request.url)
    const take = +(searchParams.get('take') ?? '10');
    const skip = +(searchParams.get('skip') ?? '0');


    if (isNaN(take)) {
        return NextResponse.json({ msg: 'el take debe ser un numero' }, { status: 400 });
    }
    if (isNaN(skip)) {
        return NextResponse.json({ msg: 'el skip debe ser un numero' }, { status: 400 })
    }

    const todos = await prisma.todo.findMany({
        take,
        skip
    });

    return NextResponse.json(
        todos
    )
}

const postSchema = yup.object({
    description: yup.string().required(),
    complete: yup.boolean().optional().default(false)

})

export async function POST(request: Request) {

    try {
        const { description, complete } = await postSchema.validate(await request.json());

        const todo = await prisma.todo.create({ data: { description, complete } })

        return NextResponse.json({ todo })
    } catch (error) {
        return NextResponse.json(error, { status: 400 })
    }
}

export async function DELETE(request: Request) {

    const todos = await prisma.todo.findMany({
        where: {
            complete: true
        }
    });
    

    if (todos.toString() === '') {
        return NextResponse.json(
            {
                message: `No existen ToDos completados`
            },
            { status: 404 })
    }
        const deleteTodo = await prisma.todo.deleteMany({
            where: { complete: true}
        })

    return NextResponse.json(
        { message: `Se borraron los todos: ${todos.map( todo => todo.description)}`} ,
        { status: 200 })
}
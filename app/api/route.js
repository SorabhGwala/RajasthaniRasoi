import Todo from "@/models/Todo";
import { NextResponse } from "next/server";



export async function POST(request){
    try {
        const {title,description}= await request.json();
        await connectDB();
        const todo = await Todo.create({
            title,description
        });
        return NextResponse.json({
            message: "Todo created successfully",
            todo: todo
        })
        
    } catch (error) {
        console.error(error);
        
    }
}
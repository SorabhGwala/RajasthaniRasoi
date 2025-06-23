import mongoos,{Schema} from 'mongoose';

const todoSchema = new Schema ({
    titile:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})

const Todo = mongoos.models.Todo || mongoos.model('Todo', todoSchema);
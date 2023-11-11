import axios from 'axios'
import { ref, onMounted, reactive } from 'vue'


export default function useTodos() {

    const todoList = ref([])

    const todo = reactive({
        title: '',
        description: ''
    })

    const fetchTodos = async () => {
        const url = 'http://localhost:8080/api/todo'
        todoList.value = (await axios.get(url)).data
    }

    const createTodo = async (title, description) => {
        const url = 'http://localhost:8080/api/todo'
        await axios.post(url, { title, description })
        todo.title = ''
        todo.description = ''
        await fetchTodos()
    }

    const deleteTodo = async (todoId) => {
        const url = 'http://localhost:8080/api/todo'
        await axios.delete(url + '/' + todoId)
        todo.title = ''
        todo.description = ''
        await fetchTodos()
    }

    onMounted(fetchTodos)

    return { todo, todoList, createTodo, deleteTodo }
}
<template>
  <div>
    <form @submit.prevent="createTodo(todo.title, todo.description)">
      <input v-model="todo.title" placeholder="Название">
      <input v-model="todo.description" placeholder="Описание">
      <my-btn type="submit" :disabled="!todo.title || !todo.description"
        :class="{ disabled_btn: !todo.title || !todo.description }">Создать</my-btn>
    </form>


    <div>
      <div class="todo_item" v-for="todo in todoList" :key="todo.id">
        <div>
          <h4>{{ todo.id + '. ' + todo.title }}</h4>
          <p>{{ todo.description }}</p>
        </div>
        <my-btn @click="deleteTodo(todo.id)">Удалить</my-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import useTodos from '@/hooks/useTodos.js'

const { todo, todoList, createTodo, deleteTodo } = useTodos()









</script>

<style lang="css">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.todo_item {
  display: flex;
  justify-content: space-between;
  border: 2px solid black;
  margin: 10px;
  padding: 5px;
}
</style>

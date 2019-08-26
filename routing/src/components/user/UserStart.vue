<template>
  <div>
    <p>Please select a User</p>
    <hr>
    <ul class="list-group">
      <router-link
        to="/user/1"
        tag="li"
        style="cursor: pointer"
        class="list-group-item">User 1
      </router-link>
      <router-link
        to="/user/2"
        tag="li"
        style="cursor: pointer"
        class="list-group-item">User 2
      </router-link>
      <router-link
        to="/user/3"
        tag="li"
        style="cursor: pointer"
        class="list-group-item">User 3
      </router-link>
    </ul>
  </div>
</template>

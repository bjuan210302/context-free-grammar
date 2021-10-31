<template>
  <div class="card">
    <table class="table">
      <thead>
        <tr>
          <th> j </th>
          <th v-for="(n, index) in testString" :key="n"> j = {{index+1}} </th>
        </tr>
      </thead>
      
      
      <tr class="table" v-for="(n, index) in testString" :key="n"> {{n}} 

        <td v-for="prod in outputMatrix[index]" :key="prod"> {{prod}} </td>

      </tr>
      
    </table>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>

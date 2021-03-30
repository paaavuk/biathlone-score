<template>
  <result-table />
</template>

<script>
import ResultTable from "./components/ResultTable";

export default {
  name: "App",
  components: {
    ResultTable,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

#app {
  min-height: calc(100vh - 50px);
  max-width: 80vw;
  flex-direction: column;
  justify-content: center;
  padding: 25px 0;
  margin: auto;
  display: flex;
}

h1,
h2 {
  margin: 0 auto 0;
}
</style>

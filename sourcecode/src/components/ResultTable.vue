<template>
  <el-divider><i class="el-icon-star-on"></i></el-divider>
  <h1>{{ place }}</h1>
  <h2>{{ event }}</h2>
  <el-divider><i class="el-icon-star-on"></i></el-divider>
  <el-input
    class="name-search"
    v-model="search"
    size="mini"
    placeholder="Search by name"
    prefix-icon="el-icon-search"
    clearable
  />
  <el-divider></el-divider>
  <el-table
    :data="
      tableData.filter(
        (data) =>
          !search || data['Name'].toLowerCase().includes(search.toLowerCase())
      )
    "
    size="small"
    :default-sort="{ prop: 'Pos', order: 'ascending' }"
    max-height="300"
    class="result-table"
  >
    <el-table-column label="#" prop="Pos" min-width="80" sortable>
    </el-table-column>
    <el-table-column label="Name" prop="Name" min-width="250" sortable>
    </el-table-column>
    <el-table-column label="Shooting" prop="Shooting" min-width="100" sortable>
    </el-table-column>
    <el-table-column label="Time" min-width="100" prop="Time">
    </el-table-column>
    <el-table-column label="Diff." min-width="100" prop="Diff">
    </el-table-column>
  </el-table>
</template>

<script>
// looks like get data from api
import JSONData from "../assets/data/data.json";

export default {
  name: "ResultTable",
  data() {
    return {
      tableData: [],
      search: "",
      eventInfo: [],
    };
  },
  computed: {
    place() {
      return this.eventInfo.place;
    },
    event() {
      return this.eventInfo.type;
    }
  },
  created: function () {
    const { results, info } = JSONData;
    this.tableData = results;
    this.eventInfo = info;
  },
};
</script>

<style scoped>
.result-table {
  max-width: 80vw;
  margin: 0 auto;
}

.name-search {
  max-width: 250px;
}
</style>
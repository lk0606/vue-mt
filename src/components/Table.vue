<template>
  <div class="container">
    <table class="l-table">
      <thead class="l-tHead">
        <tr>
          <th v-for="(val, key) in tableData.tHead" :key="key">{{val}}</th>
        </tr>
      </thead>
      <tbody class="l-tHead">
        <tr v-for="(val, key) in tableData.tBody" :key="key">
          <td>{{val.id}}</td>
          <td>{{val.name}}</td>
          <td>{{val.amount1}}</td>
          <td>{{val.amount2}}</td>
          <td>{{val.amount3}}</td>
        </tr>
      </tbody>
      <tfoot class="l-tHead">
        <tr>
          <td v-for="(v, k) in tableData.tFoot" :key="k">
            <button>{{v}}</button>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  components: {},
  data () {
    return {
      show: 2,
      tableData: {
        tHead: ['ID', '姓名', '数值1', '数值2', '数值3'],
        tBody: [
          {
            id: '12987122',
            name: '首页1',
            amount1: '234',
            amount2: '3.2',
            amount3: 10
          },
          {
            id: '12987123',
            name: '首页2',
            amount1: '165',
            amount2: '4.43',
            amount3: 12
          },
          {
            id: '12987124',
            name: '中间1',
            amount1: '324',
            amount2: '1.9',
            amount3: 9
          },
          {
            id: '12987125',
            name: '中间2',
            amount1: '621',
            amount2: '2.2',
            amount3: 17
          },
          {
            id: '12987126',
            name: '尾页1',
            amount1: '539',
            amount2: '4.1',
            amount3: 15
          },
          {
            id: '12987126',
            name: '尾页2',
            amount1: '539',
            amount2: '4.1',
            amount3: 15
          }
        ],
        tFoot: ['首页', '上一页', '下一页', '尾页']
      }
    }
  },
  methods: {},
  created () {
  },
  mounted () {
  },
  updated () {
  }
}
</script>

<style lang="scss" scoped>
  .container {
    .l-table{
      border: 1px solid black;
      text-align: center;
      font-size: .08rem;
      width: 100%;
      padding: .06rem 0;
      background: #ccc;
      border-collapse: collapse;
      .l-tHead {
        tr {
          margin: .04rem 0;
          border-bottom: 1px solid #000;
          th, td {
            border-right: 1px solid #000;
          }
          th:last-of-type, td:last-of-type {
            border-right: none;
          }
        }
        tr:last-of-type{
          border-bottom: none;
        }
      }
    }
  }
</style>

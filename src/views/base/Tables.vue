<template>
  <div>
    <CRow>
      <CCol lg="6">
        <CTableWrapper :items="data()">
          <template #header>
            <CIcon name="cil-grid" /> Simple Table
            <div class="card-header-actions">
              <a
                href="https://coreui.io/vue/docs/components/nav"
                class="card-header-action"
                rel="noreferrer noopener"
                target="_blank"
              >
                <small class="text-muted">docs</small>
              </a>
            </div>
          </template>
        </CTableWrapper>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import CTableWrapper from './Table.vue'
import usersData from '../users/UsersData'

export default {
  name: 'Tables',
  components: { CTableWrapper },
  data() {
    return {
      messages: [],
    }
  },
  // computed: {
  //   _messages: [],
  //   get messages() {
  //     return this._messages
  //   },
  //   set messages(value) {
  //     this._messages = value
  //   },
  // },

  created() {
    fetch(
      'https://sopa-bar-desarrollo-develop.herokuapp.com/pendingTotal?idCuenta=1'
    )
      // Handle success
      .then((response) => response.json()) // convert to json
      .then((data) => {
        this.$store.state.messages = data
        console.log(this.$store.state.messages)
        // return data
      }) //print data to console
      .catch((err) => console.log('Request Failed', err)) // Catch errors
  },
  // methods: {
  //   shuffleArray(array) {
  //     for (let i = array.length - 1; i > 0; i--) {
  //       let j = Math.floor(Math.random() * (i + 1))
  //       let temp = array[i]
  //       array[i] = array[j]
  //       array[j] = temp
  //     }
  //     return array
  //   },

  //   getShuffledUsersData() {
  //     this.getAsyncData().then((data) => {
  //       console.log(data)
  //       return data
  //     })

  //     // const data = await this.getAsyncData()
  //     // console.log(data)
  //     // return data
  //     // return this.shuffleArray(usersData.slice(0))
  //   },
  // },
}
</script>

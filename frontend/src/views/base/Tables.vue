<template>
  <div>
    <CRow>
      <CCol lg="6">
        <CTableWrapper :items="getShuffledUsersData()">
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

      <!-- <CCol lg="6">
        <CTableWrapper
          :items="getShuffledUsersData()"
          striped
          caption="Striped Table"
        />
      </CCol> -->
    </CRow>
    <!-- 
    <CRow>
      <CCol lg="6">
        <CTableWrapper
          :items="getShuffledUsersData()"
          small
          caption="Condensed Table"
        />
      </CCol>

      <CCol lg="6">
        <CTableWrapper
          :items="getShuffledUsersData()"
          fixed
          border
          caption="Bordered Table"
        />
      </CCol>
    </CRow>

    <CRow>
      <CCol sm="12">
        <CTableWrapper
          :items="getShuffledUsersData()"
          hover
          striped
          border
          small
          fixed
          caption="Combined All Table"
        />
      </CCol>
    </CRow>

    <CRow>
      <CCol sm="12">
        <CTableWrapper
          :items="getShuffledUsersData()"
          hover
          striped
          border
          small
          fixed
          dark
          caption="Combined All dark Table"
        />
      </CCol>
    </CRow> -->
  </div>
</template>

<script>
import CTableWrapper from './Table.vue'
// import usersData from '../users/UsersData'

export default {
  name: 'Tables',
  components: { CTableWrapper },
  methods: {
    shuffleArray() {
      return fetch(
        'https://sopa-bar-desarrollo-develop.herokuapp.com/api/product'
      ).then((response) => response.json())
    },

    getShuffledUsersData() {
      this.shuffleArray().then((usersData) => {
        console.log(usersData)
        // console.log(usersData)
        // console.table(data)
        return usersData
      })
    },
  },
}
</script>

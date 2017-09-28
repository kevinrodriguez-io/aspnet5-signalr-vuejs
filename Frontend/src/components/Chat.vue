<template>
  <div>
    <v-flex v-if="welcomeVisible" my-5 xs10 offset-xs1>
      <v-card class="blue-grey darken-2 white--text">
        <v-card-title primary-title>
          <div class="headline">Welcome to chat</div>
        </v-card-title>
        <v-card-text>
          <div>Please read the rules</div>
          <v-btn
            fab
            absolute
            right bottom
            class="pink white--text"
            @click="welcomeVisible = false">
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex my-5 xs10 offset-xs1>
      <v-card>
        <v-card-title primary-title>
          <div class="headline">Write a message</div>
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="messageToAdd" label="Message"></v-text-field>
          <v-btn
            fab
            absolute
            right bottom
            class="green white--text"
            @click="addMessage"
          >
            <v-icon>send</v-icon>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex my-5 xs10 offset-xs1>
      <v-card>
        <v-card-title primary-title>
          <div class="headline">Incoming messages</div>
        </v-card-title>
        <v-card-text>
          <v-list v-if="messagesCount > 0" two-line>
            <v-list-tile v-for="(message, i) in messages" :key="i">
              <v-list-tile-content>
                <v-list-tile-title>{{message.message}}</v-list-tile-title>
                <v-list-tile-sub-title class="grey--text">{{message.name}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
          <div v-else>There are no new messages</div>
          <v-btn
            fab
            absolute
            right bottom
            class="red white--text"
            @click="clearMessages"
          >
            <v-icon>delete</v-icon>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-flex>
  </div>
</template>
<script>
  import $ from 'jquery'
  import 'ms-signalr-client-jquery-3'
  export default {
    data () {
      return {

        welcomeVisible: true,
        messageToAdd: '',
        messages: [],

        connection: null,
        proxy: null
      }
    },
    beforeMount () {
      let that = this

      this.connection = $.hubConnection('http://localhost:59599/signalr')
      this.proxy = this.connection.createHubProxy('ChatHub')

      this.proxy.on('messageBroadcasted', (name, message) => {
        console.log('test')
        that.messages.push({ name: name, message: message })
      })

      this.connection
        .start({ jsonp: true })
        .done(() => { console.log('Now connected, connection ID=' + that.connection.id) })
        .fail(() => { console.log('Could not connect') })
    },
    computed: {
      messagesCount () {
        return this.messages.length
      }
    },
    methods: {
      addMessage () {
        this.proxy.invoke('Send', this.connection.id, this.messageToAdd)
        .done(() => { console.log('Invocation of Send succeeded') })
        .fail(error => { console.log('Invocation of Send failed. Error: ' + error) })
      },
      clearMessages () { this.messages = [] }
    }
  }
</script>

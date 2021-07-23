const socket= io()
  
      document.querySelector('button').addEventListener('click', ()=>{
        const value = document.querySelector('input').value
  
        socket.emit('createMessage',{
          value
        })
        document.querySelector('input').value = ''
      })
  
      socket.on('connect', () => {
        console.log('connected')
      })
  
      socket.on('newMessage', (message) => {
        const li = document.createElement('li')
        li.innerHTML =  `<b>${message.text}</b> <small>${message.date}</small>`
        document.querySelector('ul').appendChild(li)
      })
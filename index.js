document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  // ADD CODE HERE!
  const moveUl = document.querySelector('#moves-container')

    document.addEventListener('keydown', function(e){
      const li = document.createElement('li')
      if(e.key == "ArrowLeft"){
        li.textContent = 'left'
        moveUl.append(li)
    
      }else if(e.key == "ArrowRight"){
        li.innerText = 'right'
        moveUl.append(li)
       
   
      }else if(e.key == "ArrowUp"){
        li.innerText = 'up'
        moveUl.append(li)
        
 
      }else if(e.key == "ArrowDown"){
        li.innerText = 'down'
        moveUl.append(li)
        
   
      }
  })
  moveButton = document.querySelector('#move-button')
  moveButton.addEventListener('click', function(e){
    const newestLi = moveUl.lastChild
    if(newestLi.innerText === 'left'){
      move('left')
      console.log('left')
    }else if(newestLi.innerText === 'right'){
      move('right')
    }else if(newestLi.innerText === 'up'){
      move('up')
    } else if(newestLi.innerText === 'down'){
      move('down')
    }
    newestLi.remove();
  })
})

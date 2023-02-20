// @ts-nocheck
const img = document.querySelectorAll('.d-block')

$(document).ready(function () {
  fetch('https://fakestoreapi.com/products?limit=4')
    .then(res => res.json())
    .then(json => {
      i = 0
      json.forEach(element => {
        const { title1, description, image } = element
        img[i].src = image
        i++
      })
    })
})

$('.card-link').on('click', function () {
  $('.toast').toast('show')
})

$(function () {
  $('[data-toggle="popover"]').popover()
})

$('#notification').on('click', function () {
  $('.modal').modal('show')
})

const ctx = document.getElementById('bar');

const bar = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Canva','ClipCut','photoshop', 'python', 'c++', 'css','html','javascript'],
      datasets: [{
        label: '# of Votes',
        data: [ 8 , 6.5 , 3 , 5 , 4 , 6 , 7, 5],
        borderWidth: 1,
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // กำหนดสีพื้นหลังแบบหน่วยเต็ม (RGBA)
        borderColor: 'rgba(54, 162, 235, 1)', 
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
});



const config = document.getElementById('doughnut').getContext('2d');

const data = {
  labels: [
    'Game','music','shopping','travel', 'read a book'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [40, 25, 20, 15, 5],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(85, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

new Chart(config, {
  type: 'doughnut',
  data: data,
});
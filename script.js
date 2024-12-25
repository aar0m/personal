function swapDiv(val) {
    switch(val) {
        default: 
        document.getElementById('2023').style.display='none';
        document.getElementById('2022').style.display='none';
        document.getElementById('2021').style.display='none';
        document.getElementById('2024').style.display='none';
        break;

        case 3: 
        document.getElementById('2023').style.display='none';
        document.getElementById('2022').style.display='none';
        document.getElementById('2021').style.display='none';
        document.getElementById('2024').style.display='block';
        break;

        case 2: 
        document.getElementById('2024').style.display='none';
        document.getElementById('2023').style.display='block';
        document.getElementById('2022').style.display='none';
        document.getElementById('2021').style.display='none';
        break;

        case 1: 
        document.getElementById('2024').style.display='none';
        document.getElementById('2023').style.display='none';
        document.getElementById('2022').style.display='block';
        document.getElementById('2021').style.display='none';
        break;
        
        case 0: 
        document.getElementById('2024').style.display='none';
        document.getElementById('2023').style.display='none';
        document.getElementById('2022').style.display='none';
        document.getElementById('2021').style.display='block';
        break;
    }

}
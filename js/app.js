// Išvalo konteinerį užduotai klasei
function clearResults(containerName) {
    let reloadContainer = document.getElementsByClassName(containerName)[0];
    reloadContainer.innerHTML = ''; 
}        

/*<article class="fruit col">
<div class="card border-0 rounded-4">
    <div class="card-body text-center">
        <p>bla bla bla</p>
    </div>
</div>
</article>*/

// Mygtukas rodyti visus vaisius
const laik=document.querySelector('button')
console.log(laik)
document.querySelector('button').addEventListener('click', ()=>{
    fetch(`https://www.fruityvice.com/api/fruit/all`)
    .then((response) => response.json())
    .then(data => {
    clearResults('one-fruit');
        const divFruits = document.querySelector('.fruits');
        console.log(divFruits)
        data.forEach(fruit => {
            //console.log(joke)
            document.querySelector('.no-fruit').style = "display: none";
            divFruits.innerHTML += `
                <article class="col">
                    <div class="card border-0 rounded-4">
                        <div class="row card-body text-center align-items-center ">
                            <h5> ${fruit.name}</h5>
                            <h6>family: ${fruit.family}</h6>
                        </div>
                    </div>
                </article>`;
        })
    })
})


{/* <article class=" d-flex justify-content-center my-5">
                <div class="col-12 col-md-7 border-0">
                    <div class="fruit col text-center">
                        <h1 class=" mb-4">Orange</h1>
                        <table class="table">
                            <tr>
                                <th>Protein</th>
                                <th>Calories</th>
                                <th>Fat</th>
                                <th>Carbs</th>
                                <th>Sugar</th>
                            </tr>
                            <tr>
                                <td class="prot">450g</td>
                                <td class="cal">220g</td>
                                <td class="fat">100g</td>
                                <td class="carbs">49g</td>
                                <td class="sugar">18g</td>
                            </tr>
                        </table>
                        <ul class="text-start p-0">
                            <li>aaa</li>
                            <li>&bull;</li>
                            <li>bbb</li>
                            <li>&bull;</li>
                            <li>ccc</li>
                        </ul>
                    </div>
                </div>
            </article> */}

// Paieškos laukas
document.querySelector('form').addEventListener("input",(e)=>{
    e.preventDefault();
    let searchQuery = document.querySelector('input').value;
    fetch(`https://www.fruityvice.com/api/fruit/${searchQuery}`)
    .then((response) => response.json())
    .then(data => {
        console.log(data)
        if (data.error != "Not found"){
            clearResults('fruits');
            clearResults('one-fruit');
            const divFruit = document.querySelector('.one-fruit');
            document.querySelector('.no-fruit').style = "display: none";
            divFruit.innerHTML += `
            <article class=" d-flex justify-content-center my-5">
                <div class="col-12 col-md-7 border-0">
                    <article class="fruit col text-center">
                        <h1 class=" mb-4">${data.name}</h1>
                        <table class="table">
                            <tr>
                                <th>Protein</th>
                                <th>Calories</th>
                                <th>Fat</th>
                                <th>Carbs</th>
                                <th>Sugar</th>
                            </tr>
                            <tr>
                                <td class="prot">${data.nutritions.protein}g</td>
                                <td class="cal">${data.nutritions.calories}g</td>
                                <td class="fat">${data.nutritions.fat}g</td>
                                <td class="carbs">${data.nutritions.carbohydrates}g</td>
                                <td class="sugar">${data.nutritions.sugar}g</td>
                            </tr>
                        </table>
                        <ul class="text-start p-0">
                            <li>${data.family}</li>
                            <li> &rarr; </li>
                            <li>${data.order}</li>
                            <li> &rarr; </li>
                            <li>${data.genus}</li>
                        </ul>
                    </article>
                </div>
            </article>`;
        }
        else {
            clearResults('fruits');
            clearResults('one-fruit');
            document.querySelector('.no-fruit').style = "display:";
        }
    })
})
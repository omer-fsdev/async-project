const section = document.querySelector("section");

const getData = async () => {
  try {
    const response = await fetch("https://api.tvmaze.com/search/shows?q=girls");
    if (!response.ok) {
      section.innerHTML = `<img src='./assets/img/404.png' alt='404 error' />`;
      throw new Error(`bro, incorrect url. Status: ${response.status}`);
    }
    const data = await response.json();
    /* console.log(data); */
    myPrint(data);
  } catch (err) {
    console.log(err);
    console.log("doesnt stop. continues to work");
  } finally {
    console.log("works in all cases. whether there is an error or not.");
  }
};

getData();

const myPrint = (data) => {
  data.forEach((i) => {
    section.innerHTML += `
        <h2 class='text-info mt-5'>${i.show.name}</h2>
        <img src=${i.show.image.medium} alt='movie image' class='mb-2'/>
        <h6 class='fst-italic text-warning'>GENRES: ${i.show.genres}</h6>
        `;
  });
};

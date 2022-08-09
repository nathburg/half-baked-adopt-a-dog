import { getDog } from "../fetch-utils.js";
import { renderDogDetail } from "../render-utils.js";

const params = new URLSearchParams(window.location.search);
const dogDetail = document.getElementById('dog-detail');
async function loadData() {
    const dogBa = await getDog(params.get('id'));
    const dogDiv = renderDogDetail(dogBa);
    dogDetail.append(dogDiv);
}

loadData();



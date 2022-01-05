import axios from "axios";

export async function postSurvey(surveyEntry){
    var result = await axios.post(
        "https://jilktatj74.execute-api.us-west-2.amazonaws.com/dev/food-survey",{
            name:surveyEntry.name,
            typeOfFood:surveyEntry.typeOfFood,
            recommend:surveyEntry.recommend,
            rating:surveyEntry.rating,

        })
        .then((response) => {
        return response.data
    });
    return result;
}

export async function loadResults(){
    var result = await axios.get(
        "https://jilktatj74.execute-api.us-west-2.amazonaws.com/dev/test2"
    ).then((response) => {
        return response.data
    })
    return result
}
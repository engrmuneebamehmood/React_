import axios from 'axios';
const searchImages=async(term)=>
{
   const response =await axios.get('https://api.unsplash.com/search/photos',
    {
        headers:{
            Authorization:'Client-ID VGBI-vZbLKbEmp8MDHKLJrG3g65U-wTaFAU_pOqDqSQ'

        },
        params:{
            query:term,

        }
    });
    console.log(response);
    return response.data.results;
    
};

export default searchImages;

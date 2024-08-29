import graphqlRequest from "./graphqlRequest";
export async function getAllToursCards(idioma) {
  const datatemp = idioma;
  const language = datatemp;
  const query = {
    query: `
query getAllToursCards($language: LanguageCodeFilterEnum!)   {
  tours (where: { language: $language }){
    nodes {
      slug
      title
      featuredImage {
        node {
          mediaDetails {
            file
          }
          link
          altText
        }
      }
      tourinfo {
        dias
        precio
      }
      id
    }
  }
}
  `,
    variables: {
      language,
    },
  };
  const restJson = await graphqlRequest(query);
  const cardtours = restJson.data.tours;
  return cardtours;
}
export async function getSingleTour(slug, language) {
  const idioma = language.toUpperCase();
  // const idioma = "ES";
  console.log(idioma);
  const query = {
    query: `
query SigleTour ($idioma: LanguageCodeEnum!) {
  tour(id: "${slug}", idType: SLUG,) {
  translation(language: $idioma) {
        id
    tourinfo {
      descripciontour
      itinerariotour
      included
      recomenda
      paymentmethods
      dias
      precio
      galeria {
        nodes {
          mediaDetails {
            file
          }
          altText
        }
      }
    }
    featuredImage {
      node {
        altText
        mediaDetails {
          file
          sizes {
            sourceUrl
            width
            height
          }
        }
      }
    }
    seo {
      title
      metaDesc
      schema {
        articleType
        pageType
        raw
      }
    }
    slug
    title
    language {
      code
    }
    }
  }
}
    `,
    variables: {
      idioma,
    },
  };
  const restJson = await graphqlRequest(query);
  console.log(restJson);
  const singleTour = restJson.data.tour;
  return singleTour;
}

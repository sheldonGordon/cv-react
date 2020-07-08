const initState = {
  curriculums: [
    { id: "1", titre: "titre 1", description: "description 1 blablabla" },
    { id: "2", titre: "titre 2", description: "description 2 blablabla" },
    { id: "3", titre: "titre 3", description: "description 3 blablabla" },
  ],
};

const curriculumReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_CV":
      console.log("created cv ", action.curriculum);
      return state;

    case "CREATE_CV_ERREUR":
      console.log("created cv erreur", action.erreur);
      return state;

    case "UPDATE_CV":
      console.log("updated cv ", action.curriculum);
      return state;

    case "UPDATE_CV_ERREUR":
      console.log("updated cv erreur", action.erreur);
      return state;

    default:
      return state;
  }
};

export default curriculumReducer;

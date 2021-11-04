const app = Vue.createApp({
  data() {
    return {
      title: "Catálogo de Movies in Vue JS",
      movieData: {},
      movieTitle: "Spider Man 2"

    };
  },
  mounted() {
    this.getMovie();
  },
  methods: {
    async getMovie() {
      const search = this.movieTitle.toLowerCase().replace(/ /g, "+" )

      const data = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=dda12f0d&t=${search}`)
      
      const jsonData = await data.json()
      this.movieData = jsonData

    },

  },
});



/*
Here is your key: dda12f0d

Please append it to all of your API requests,

OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=dda12f0d

Click the following URL to activate your key: http://www.omdbapi.com/apikey.aspx?VERIFYKEY=fc3699ec-3d23-42d0-8420-722068ace743
If you did not make this request, please disregard this email.
*/
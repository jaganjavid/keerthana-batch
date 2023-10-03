class Github {
    constructor(){
       this.client_id = "90bc02da0b6bad1dd81d";
       this.client_secret = "8ff70490de0314433be83e2a13a2e717e4b034a9";
    }


    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}
        &client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }

    }
}
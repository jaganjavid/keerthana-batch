class UI {
    constructor() {
        this.profile = document.getElementById("profile");
    }

    // Display Profile user

    showProfile(user) {
        if (user.profile.message === "Not Found") {
            this.profile.innerHTML = `<h3>Not Found</h3>`
        } else {
            this.profile.innerHTML = `
                    <div class="card card-body mb-3">
                    <div class="row align-items-center">
                    <div class="col-md-3">
                        <img width="100px" class="mb-3" src=${user.profile.avatar_url} alt="">
                        <a href=${user.profile.html_url} target="_blank" class="btn btn-primary">View Profile</a>
                    </div>
            
                    <div class="col-md-9">
                        <span class="badge bg-primary">Public Repos : ${user.profile.public_repos}</span>
                        <span class="badge bg-secondary">Followers : ${user.profile.followers}</span>
                        <span class="badge bg-info">Following : ${user.profile.following}</span>
                    </div>
            
                    <br>
                    <br>
            
                    <ul class="list-group">
                        <li class="list-group-item">
                            Company : ${user.profile.company}
                        </li>
                        <li class="list-group-item">
                            blog : ${user.profile.blog}
                        </li>
                        <li class="list-group-item">
                            location : ${user.profile.location}
                        </li>
                    </ul>
                    </div>
                </div>
            `
        }
    }
}
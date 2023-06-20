import axios from "axios";


export class SQLView {
    variables = {}
    client = null;
    id = null;

    constructor({baseURL, username, password}) {
        this.client = axios.create({
            baseURL: `${baseURL}/api`,
            auth: {
                username,
                password
            }
        })
    }

    setId(id) {
        this.id = id;
        return this;
    }

    setVariables(variables) {
        this.variables = variables;
        return this;
    }

    async get() {
        if (this.id) {
            throw Error("id is not set")
        }
        try {
            const params = Object.entries(this.variables).map(([key, value]) => {
                return `var=${key}:${value}`
            }).join('&')
            const url = `sqlViews/${this.id}?${params}`;

            const {data} = await this.client.get(url);

            return data;
        } catch (e) {
            //Handle error
        }


    }
}

export class Fn {
    client = null

    constructor({
                    username,
                    password,
                    baseURL
                }) {

    }


}

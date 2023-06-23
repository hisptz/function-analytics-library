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
        if (!this.id) {
            throw new Error("id is not set")
        }
        try {
            const params = Object.entries(this.variables).map(([key, value]) => {
                return `var=${key}:${value}`
            }).join('&')
            const url = `sqlViews/${this.id}?${params}`;

            const {data} = await this.client.get(url);

            return data;
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                console.error('Request error:', error.response.data);
                console.error('Status code:', error.response.status);
                console.error('Headers:', error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received:', error.request);
            } else {
                // Other errors occurred during the request setup or processing
                console.error('Error:', error.message);
            }
            throw new Error('Error occurred');
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
                    this.username = username;
                    this.password = password;
                    this.baseURL = baseURL;
                    this.client = axios.create({
                        baseURL: this.baseURL,
                        auth: {
                                username: this.username,
                                password: this.password,
                        },
                        });
                            }

                    // Setter methods
                        setUsername(username) {
                                this.username = username;
                                                }

                        setPassword(password) {
                                this.password = password;
                                                }

                        setBaseURL(baseURL) {
                                this.baseURL = baseURL;
                                this.client.defaults.baseURL = baseURL;
                                                }
                    // Getter methods
                        getUsername() {
                                return this.username;
                                         }

                        getPassword() {
                                return this.password;
                                        }

                        getBaseURL() {
                                return this.baseURL;
                                        }

                        // Additional methods
                                async performRequest(url, method = 'GET', data = null) {
                                    try {
                                            const response = await this.client.request({
                                            url,
                                            method,
                                            data,
                                            });
                                        return response.data;
                                            } catch (error) {
                                            console.error('Request error:', error.response.data);
                                            console.error('Status code:', error.response.status);
                                            console.error('Headers:', error.response.headers);
                                            throw new Error('Error occurred');
                                            }


                                                            }


            }

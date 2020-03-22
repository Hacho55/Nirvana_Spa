//db
const db = require('../../database/models');
const Users = db.users;
const apiKey = 12345678;


const userController = {
    list: (req, res) => {
        if(req.query.apikey == apiKey) {
            Users
                .findAll({
                    attributes: ["id", "firstName", "lastName", "email"]
                })
                .then( users => {
                    let userList = users.map( oneUser => {
                        return oneUser = {
                            id: oneUser.id,
                            firstName: oneUser.firstName,
                            lastName: oneUser.lastName,
                            email: oneUser.email,
                            url: `http://localhost:3000/api/users/${oneUser.id}?apikey=${apiKey}`,
                            }
                    });
                    let page = Number(req.query.page);
                    let nextUrl = `http://localhost:3000/api/users/?apikey=${apiKey}&page=2`;
                    let prevUrl = null;
                    if(!page){
                        userList = userList.slice(0,10);
                        
                    } else {
                        userList = userList.slice((page*10-10), (page*10));
                        prevUrl = `http://localhost:3000/api/users/?apikey=${apiKey}&page=${page}`;
                        page += 1;
                        if( page <= (users.length / 10)+1) {
                            nextUrl = `http://localhost:3000/api/users/?apikey=${apiKey}&page=${page}`;
                        } else {
                            nextUrl = null;
                        }
                        
                    }

                    return res.status(200).json({
                        key: "Authorized",
                        total_results: users.length,
                        next: nextUrl,
                        prev: prevUrl,
                        users: userList
                    });
                })
                .catch(error => res.json(error));
        } else { 
            return res.status(401).json({
                key: "Unauthorized",
                total_results: null,
                users: null
            });
        }

    },
    detail: (req, res) => {
        if(req.query.apikey == 12345678){
            Users
                .findOne({
                    where: {id: req.params.id},
                    attributes: ["id", "firstName", "lastName", "email", "avatar"]
                })
                .then(user => {
                    if(user) {
                        user.avatar = `http://localhost:3000/images/avatars/${user.avatar}`;
                        return res.status(200).json(user);
                    }
                    return res.status(404).json({
                        user: 'Not Found',
                        
                    });
                }).catch(error => res.json(error));
        } else { 
            return res.status(401).json({
                key: "Unauthorized",
                msg: "Clave sin autorización"
            });
        }
                
    },
    
    find: (req, res) => {
        Users
            .findOne({
                where: {email: req.params.email},
                attributes: ['id', 'email']
            })
            .then(user => {
                if(user) {
					return res.status(200).json({
                        userFound: true,
                        msg: "email registrado",
                        data: user
                    });
				}
				return res.status(404).json({
                    userFound: false,
                    msg: "email no registrado"
				});
			}).catch(error => res.json(error));
                
    }
};


module.exports = userController;
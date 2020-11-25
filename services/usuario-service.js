const { Usuario } = require('../model/api/usuario/index');
const bcrypt = require('bcrypt');
const saltRounds = 10;
class UsuarioService {

    static async GetAllUsuario() {
        try {
            return await Usuario.findAll({
                 order: [
                    ['id', 'ASC'],
                ]
            });
        } catch (error) {
            throw error;
        }
    }

    static async GetUsuarioForId(id) {
        try {
            return await Usuario.findOne({
                where: { id: id }
            });
        } catch (error) {
            throw error;
        }
    }  

    static async CreateUsuario(body) {
        try {
            
            if(body.username){
                let user=await Usuario.findOne({
                    where: { username: body.username }
                });
               
              

                if (!user){
                    if(body.password){
                        const password = body.password;
                        const password_hash= bcrypt.hashSync(password,saltRounds);
                        body.password = password_hash;
                        return {data:await Usuario.create(body)};
                        /*return await Usuario.create(body);*/
                    }
                    
                    else {
                        return {error:'No hay password'}
                        /*throw new Error('No hay password');*/
                    }
                }

                else{
                    return {error:'El usuario ya ha sido registrado'}
                    /*throw new Error('El usuario ya ha sido registrado');*/
                }

            }
            else{
                return {error:'No hay usuario'}
                /*throw new Error('No hay usuario');*/
            }
            
            

        } catch (error) {
            throw error;
        }
    }

    static async UpdateUsuario(body, id) {
        try {
            return await Usuario.update(body,
                { where: { id: id } });
        } catch (error) {
            throw error;
        }
    }


    static async Login(body){

        console.log('body>>>',body);
        var username = body.username;
        var password = body.password;


        try{

        
        let usuario= await Usuario.findOne(
            { where: { 
                username: username,
            } }
            
            );
        

            if(!usuario){
                throw new Error('No existe el usuario');
            }

            else{

                console.log(usuario.password,password)
                const match = await bcrypt.compare( password,usuario.password);

                if(match)
                    return usuario;
                else
                    return null;
            }           
            
        }
        catch(error){
            throw error;
        }

    }


}



module.exports = UsuarioService;

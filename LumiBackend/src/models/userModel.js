// // src/models/UserModel.js
// class UserModel {
//     constructor({ id, username, email, password, avatar, role }) {
//       this.id = id || null;
//       this.username = username;
//       this.email = email;
//       this.password = password;
//       this.avatar = avatar || '';
//       this.role = role || 'user';
//     }
  
//     static fromFirestore(doc) {
//       const data = doc.data();
//       return new UserModel({
//         id: doc.id,
//         username: data.username,
//         email: data.email,
//         password: data.password,
//         avatar: data.avatar,
//         role: data.role
//       });
//     }
//   }
  
//   module.exports = UserModel;
  

// src/models/UserModel.js
class UserModel {
    constructor({ username, email, password, avatar, role }) {
      this.username = username;
      this.email = email;
      this.password = password;
      this.avatar = avatar || '';
      this.role = role || 'user';
    }
  }
  
  module.exports = UserModel;
  
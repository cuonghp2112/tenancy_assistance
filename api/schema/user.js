var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
  {
    first_name: {type: String, required: true, max: 100},
    family_name: {type: String, required: true, max: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
  }
);

var User = new Schema({
    id : {type: Number, required: true},
    role: {type: Number, required: true},
    star: {type: Number},
    number_rated: {type: Number},
    id_comment: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    name: {type: String, required: true}
})

User
    .virtual('star_avg')
    .get(function(){
        if (this.number_rated != 0) {
            return Math.round(this.star / this.number_rated)
        } 
        else {
            return 'Người dùng chưa được đánh giá'
        }
    })

module.exports = mongoose.model('User', User);
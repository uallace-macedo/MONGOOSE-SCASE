import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const AnnouncementModel = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
    maxlength: 50,
    uppercase: true
  },
  description: {
    type: String,
    required: true,
    maxlength: 255
  },
  validity: {
    type: Date,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  idCompany: {
    type: mongoose.Schema.Types.ObjectId, // como uma chave estrangeira
    ref: 'Company'
  }
}, { timestamps: true, autoCreate: true })

AnnouncementModel.plugin(mongoosePaginate);
export default mongoose.model('Announcement', AnnouncementModel, 'Announcement');

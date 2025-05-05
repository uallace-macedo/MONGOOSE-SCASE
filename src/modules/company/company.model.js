import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const CompanyModel = new mongoose.Schema({
  cnpj: {
    type: Number,
    required: true,
    unique: true
  },
  corporate_name: {
    type: String,
    required: true,
    maxlength: 100
  },
  name: {
    type: String,
    required: true,
    maxlength: 100
  },
  email: {
    type: String,
    required: true,
    maxlength: 50
  },
  password_hash: {
    type: String,
    required: true
  },
  address: {
    street: {
      type: String,
      required: true,
      maxlength: 100
    },
    zip_code: {
      type: String,
      required: true,
      maxlength: 100
    },
    city: {
      type: String,
      required: true,
      maxlength: 50
    },
    state: {
      type: String,
      required: true,
      maxlength: 2
    }
  },
  telephone: {
    comercial_phone: {
      type: Number,
      required: true,
    },
    cellphone: {
      type: Number,
      required: true,
    }
  },
  admin: {
    type: Boolean,
    required: true,
    default: false
  },
  active: {
    type: Boolean,
    required: true,
    default: false
  }
}, { timestamps: true, autoCreate: true })

CompanyModel.plugin(mongoosePaginate);
export default mongoose.model('Company', CompanyModel, 'Company');

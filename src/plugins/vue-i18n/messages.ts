import { common as commonVi } from '../../common/locale/vi/common.vi';
import { common as commonEn } from '../../common/locale/en/common.en';
import { app as appVi } from '../../common/locale/vi/app.vi';
import { app as appEn } from '../../common/locale/en/app.en';
import { yupVi } from '../yup/locale/vi';
import { yupEn } from '../yup/locale/en';
import { fields as yupFieldsVi } from '../yup/locale/fields.vi';
import { fields as yupFieldsEn } from '../yup/locale/fields.en';
import auth from '../../features/auth/locale';

const messages = {
    vi: {
        app: appVi,
        common: commonVi,
        yup: yupVi,
        yupFields: yupFieldsVi,
        auth: auth.vi,
    },
    en: {
        app: appEn,
        common: commonEn,
        yup: yupEn,
        yupFields: yupFieldsEn,
        auth: auth.en,
    },
};

export default messages;

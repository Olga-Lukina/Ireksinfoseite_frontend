import { mapGetters } from 'vuex';

export const authComputed = {
  ...mapGetters(['loggedIn', 'isAdmin']),
};

export const formatErrorMessages = (e) => {
  let errors = [];
  console.error('error', e.response);
  if (Array.isArray(e?.response?.data?.errors)) {
    errors = e.response.data.errors;
  } else if (e?.response?.data?.message) {
    errors = [e?.response?.data?.message];
  }
  return errors;
};

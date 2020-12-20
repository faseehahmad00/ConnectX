import {db} from './firebase';

class UsersStore {
  constructor() {
    this.users = new Map();
  }

  async getData(uid) {
    if (this.users.has(uid)) {
      return this.users.get(uid);
    }

    const doc = await db.doc(`/users/${uid}`).get();
    if (!doc.exists) {
      throw new Error('User doesn\'t Exists');
    }

    this.users.set(uid, {_id: doc.id, ...doc.data()});
    return this.users.get(uid);
  }
}

export const usersStore = new UsersStore();

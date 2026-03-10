import argon from 'argon2';

const hashCheck = async (hash, text) => {
    const result = await argon.verify(hash, text);
    return result;
}

export default hashCheck;
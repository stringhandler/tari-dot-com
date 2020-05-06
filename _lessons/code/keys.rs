use tari_crypto::ristretto::{ RistrettoSecretKey as SecretKey, RistrettoPublicKey as PublicKey };
use tari_utilities::hex::Hex; use tari_crypto::keys::PublicKey as PK;

fn main() {
    // Create the secret key 1;
    let k = SecretKey::from_hex("0000000000000000000000000000000000000000000000000000000000000001").unwrap();
    // Generate the public key, P = k.G
    let pubkey = PublicKey::from_secret_key(&k);
    println!("{}", pubkey)
}
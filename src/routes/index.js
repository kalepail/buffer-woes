console.log('Buffer is real!', Buffer.from('hello world').toString('base64'))

import { Keypair } from 'stellar-base'

export async function get() {
  console.log('Buffer is fake :(')
  const keypair = Keypair.random()

  console.log(keypair)

	return {
		body: {
			keypair: {
        publicKey: keypair.publicKey(),
        secret: keypair.secret()
      }
		}
	}
}
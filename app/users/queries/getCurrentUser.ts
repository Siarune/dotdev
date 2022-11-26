import db from "app/db"
import { Ctx } from "blitz"

export default async function getCurrentUser( _ = null, { session }: Ctx ) {
	if (!session.userId) {
		return null
	}

	const user = await db.user.findFirst({
		where: { id: session.userId as number },
		select: { id: true, name: true, email: true, role: true },
	})

	return user
}

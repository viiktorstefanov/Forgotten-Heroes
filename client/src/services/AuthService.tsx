import request from './Request';

export async function getUserPoints(googleId: string): Promise<number> {
    try {
        const data = await request.get(`/users/${googleId}`);
        return data; 
    } catch (error) {
        console.error('Error fetching user points:', error);
        throw error; 
    }
}


export async function updateUserPoints(googleId: string, points: number): Promise<void> {
    try {
        await request.put(`/users/${googleId}`, { points });
    } catch (error) {
        console.error('Error updating user points:', error);
        throw error; 
    }
}

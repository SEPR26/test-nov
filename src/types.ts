export type StateUsersType = {
    usersInfo: UsersInfoType[];
    total: number,
    total_pages: number
}
export type UsersInfoType = {
    id: number
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}
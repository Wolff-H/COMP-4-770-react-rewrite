import Game from './Game'

declare global
{
    interface Window
    {
        game: Game
    }
}

export default
function main()
{
    window.game = new Game()

    console.log(window.game)
    

    

}
class GymsController < ApplicationController

    before_action :find_gym, except: :index

    def index
        render json: Gym.all
    end

    def show
        render json: @gym
    end

    def update
        @gym.update!(gym_params)
        render json: @gym
    end

    def destroy
        @gym.destroy
        head :no_content
    end
    
    private
    
    def find_gym
        @gym = Gym.find(params[:id])
    end

    def gym_params
        params.permit(:name, :address)
    end
end

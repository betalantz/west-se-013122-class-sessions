class MissionsController < ApplicationController

    def create
        
    end

    private

    def mission_params
        params.permit(:name, :scientist_id, :planet_id)
    end
end

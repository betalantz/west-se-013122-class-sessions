class ActivitiesController < ApplicationController

    def index
        render json: Activity.all
    end

    def destroy
        activity = Activity.find(params[:id])
        activity.destroy
        head :no_content
    end
end

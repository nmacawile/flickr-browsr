class StaticPagesController < ApplicationController
  def index
    unless params[:user].blank?
      begin
        @person = Flickr.people.find(params[:user]).get_info!
        @photos = @person.public_photos(page: params[:page], per_page: 10)
      rescue
        flash[:danger] = "No such user."
      end
      
      unless @photos.present?
        begin
          flash.clear
          @person = Flickr.people.find_by_username(params[:user])
          @photos = @person.public_photos(page: params[:page], per_page: 10)
        rescue
          flash[:danger] = "No such user."
        end
      end
      
    end
  end
end

require 'test_helper'

class TagRelControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get tag_rel_create_url
    assert_response :success
  end

end

class TotalMembershipsSerializer < ActiveModel::Serializer
    attributes :id, :name, :age, :total_memberships

    def total_memberships
        self.object.memberships.sum(:charge)
    end
end
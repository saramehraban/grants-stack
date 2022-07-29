import { Link, useParams } from "react-router-dom"

import { useListGrantApplicationsQuery } from "../api/services/grantApplication"
import { Spinner } from "../common/Spinner"
import {
  ProjectCardsContainer,
  ProjectCard,
  ProjectCardHeader,
  ProjectCardContent,
  ProjectCardTitle,
  ProjectCardDescription
} from "../common/styles"


export default function ApplicationsReceived() {
  const { id } = useParams()

  const { data, isLoading, isSuccess } = useListGrantApplicationsQuery({
    roundId: id!, status: "PENDING"
  })

  return (
    <ProjectCardsContainer>
      {isSuccess && data?.map((application, index) => (
        <ProjectCard key={index} className="application-card" data-testid="application-card">
          <ProjectCardHeader />
          <ProjectCardContent>
            <Link to={`/round/${id}/application/${application.id}`}>
              <ProjectCardTitle>{application.project.title}</ProjectCardTitle>
            </Link>
            <ProjectCardDescription>{application.project.description}</ProjectCardDescription>
          </ProjectCardContent>
        </ProjectCard>
      ))}
      {isLoading &&
        <Spinner text="Fetching Grant Applications" />
      }
    </ProjectCardsContainer>
  )
}